"use client";

import { useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button, Input, Label, Spinner } from "@heroui/react";
import { FaCamera, FaUser, FaLink } from "react-icons/fa";

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
    <section className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md">
        <div className="relative border border-divider rounded-3xl overflow-hidden shadow-xl bg-background">
          <div className="h-28 bg-gradient-to-r from-warning/30 via-warning/10 to-transparent relative">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, oklch(var(--heroui-warning)) 0%, transparent 60%)",
              }}
            />

            <span className="absolute top-4 right-6 text-3xl opacity-20 rotate-12">
              🐾
            </span>
            <span className="absolute bottom-2 right-20 text-xl opacity-10 -rotate-6">
              🐾
            </span>
          </div>

          <div className="flex flex-col items-center -mt-12 px-8 pb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full ring-4 ring-background shadow-lg overflow-hidden relative">
                <Image
                  src={imageUrl || user?.image || "/default-avatar.png"}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-warning flex items-center justify-center shadow-md">
                <FaCamera className="text-white text-xs" />
              </div>
            </div>

            <h1 className="text-xl font-bold text-foreground">{user.name}</h1>
            <p className="text-xs text-foreground-400 mt-0.5">{user.email}</p>

            <div className="w-full border-t border-divider my-6" />

            {/* form */}
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-warning flex items-center gap-1.5">
                  <FaUser className="text-warning/70" />
                  Display Name
                </Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  variant="bordered"
                  radius="lg"
                  classNames={{
                    inputWrapper:
                      "border-divider hover:border-warning focus-within:border-warning",
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-warning flex items-center gap-1.5">
                  <FaLink className="text-warning/70" />
                  Photo URL
                </Label>
                <Input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  variant="bordered"
                  radius="lg"
                  classNames={{
                    inputWrapper:
                      "border-divider hover:border-warning focus-within:border-warning",
                  }}
                />
                <p className="text-xs text-foreground-400 px-1">
                  Paste a direct image link from imgbb or similar
                </p>
              </div>

              {error && (
                <div className="bg-danger/10 border border-danger/20 rounded-xl px-4 py-2.5">
                  <p className="text-danger text-sm text-center">{error}</p>
                </div>
              )}

              <Button
                onClick={handleUpdate}
                disabled={loading}
                radius="full"
                size="lg"
                className="w-full bg-warning text-white font-bold mt-1 shadow-lg shadow-warning/30 hover:shadow-warning/50 transition-all"
              >
                {loading ? <Spinner color="white" size="sm" /> : "Save Changes"}
              </Button>

              <button
                onClick={() => router.back()}
                className="text-sm text-foreground-400 hover:text-foreground-600 transition-colors text-center pb-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-foreground-300 mt-4">
          🐾 PetPlace — your profile, your identity
        </p>
      </div>
    </section>
  );
};

export default EditProfile;
