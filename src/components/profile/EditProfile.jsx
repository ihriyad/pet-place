"use client";

import { useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button, Spinner } from "@heroui/react";

const EditProfile = ({ user }) => {
  const router = useRouter();

  const [name, setName] = useState(user?.name || "");
  const [imageUrl, setImageUrl] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdate = async () => {
    if (!name.trim()) {
      setError("Name can't be empty.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await authClient.updateUser({
        name: name.trim(),
        image: imageUrl.trim() || undefined,
      });
      router.push("/");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-background border border-divider rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-20 h-20 mb-4">
            <Image
              src={imageUrl || user?.image}
              alt="Profile preview"
              fill
              className="rounded-full object-cover border border-divider"
            />
          </div>
          <h1 className="text-xl font-bold text-foreground">Edit Profile</h1>
          <p className="text-sm text-foreground-500 mt-1">
            Update your display name or photo
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-foreground-500">
              Display Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="bg-default-50/50 border border-divider rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-warning transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-foreground-500">
              Photo URL
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="bg-default-50/50 border border-divider rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-warning transition-colors"
            />
          </div>

          {error && <p className="text-danger text-sm text-center">{error}</p>}

          <Button
            onClick={handleUpdate}
            disabled={loading}
            radius="full"
            className="w-full bg-warning/20 text-warning font-semibold mt-2"
          >
            {loading ? <Spinner color="warning" size="sm" /> : "Save Changes"}
          </Button>

          <button
            onClick={() => router.back()}
            className="text-sm text-foreground-400 hover:text-foreground-600 transition-colors text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
