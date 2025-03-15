'use client';

import { updateProfile } from '@/actions/profile.action';
import Dropzone from 'react-dropzone';
import { uploadFile } from '@/actions/files.action';
import { useState } from 'react';
import { OptimizedImage } from '@/components/optimized-image';

export default function UpdateAvatarSection({ user }: { user: User }) {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <section className="rounded-md bg-background-100 border overflow-hidden">
      <form>
        <div className="p-6 border-b">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-semibold capitalize">Your Avatar</h4>
              <p className="my-3">
                This is your avatar.
                <br />
                Click on it to upload your custom one from your files.
              </p>
            </div>
            <Dropzone
              accept={{
                'image/png': ['.png'],
                'image/jpg': ['.jpg'],
                'image/jpeg': ['.jpeg'],
              }}
              disabled={isUploading}
              multiple={false}
              onDrop={async (acceptedFiles, fileRejections) => {
                if (fileRejections.length > 0) {
                  console.log(fileRejections);
                } else {
                  try {
                    setIsUploading(true);
                    const res = await uploadFile(acceptedFiles[0]);
                    if (res?.status === 'success') {
                      await updateProfile({ avatar: res?.data?.fileUrl });
                    }
                  } finally {
                    setIsUploading(false);
                  }
                }
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <button
                  type="button"
                  {...getRootProps()}
                  className="size-20 focus:ring-offset-8 rounded-full overflow-hidden relative before:absolute before:z-[1] before:inset-0 before:transition hover:before:bg-background-100/25"
                >
                  <input {...getInputProps()} disabled={isUploading} />
                  <OptimizedImage
                    src={user.avatar || ''}
                    alt={user.name + "'s avatar"}
                    className="rounded-full"
                  />
                </button>
              )}
            </Dropzone>
          </div>
        </div>
        <footer className="flex items-center justify-between py-3 px-6">
          <div className="text-gray-900">
            An avatar is optional but strongly recommended.
          </div>
        </footer>
      </form>
    </section>
  );
}
