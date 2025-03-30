'use client';

import { updateProfile } from '@/actions/profile.action';
import Dropzone from 'react-dropzone';
import { deleteFile, uploadFile } from '@/actions/storage.action';
import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { CloudUpload, Cross, Trash } from 'vercel-geist-icons';
import LoadingDots from '@/components/ui/loading-dots';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from 'sonner';
import {
  AnimatedPopper,
  AnimatedPopperContent,
  AnimatedPopperOverlay,
  AnimatedPopperTrigger,
} from '@/components/ui/animated-popper';
import { OptimizedImage } from '@/components/optimized-image';
import { AnimatedPopperClose } from '@/components/ui/animated-popper/animated-popper';

export default function UpdateAvatarSection({ user }: { user: User }) {
  const [isUploading, startUploadTransition] = useTransition();
  const [isDeleting, startDeleteTransition] = useTransition();

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
            <div className="flex flex-col gap-2 justify-center">
              <AnimatedPopper>
                <AnimatedPopperTrigger className="size-20 focus:ring-offset-8 rounded-full overflow-hidden group relative before:absolute before:z-[1] before:inset-0 before:transition hover:before:bg-background-100/25 before:rounded-full">
                  <OptimizedImage
                    src={user.avatar}
                    alt={user.name + "'s avatar"}
                    className="rounded-full"
                  />
                </AnimatedPopperTrigger>
                <AnimatedPopperContent
                  initial={{
                    opacity: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="rounded-xl w-[80vw] h-[80vh] bg-background-100 p-3 border"
                >
                  <AnimatedPopperOverlay />
                  <AnimatedPopperClose asChild>
                    <Button
                      iconOnly
                      className="absolute right-3 top-3 z-50 bg-transparent"
                    >
                      <Cross />
                    </Button>
                  </AnimatedPopperClose>
                  <OptimizedImage
                    src={user.avatar}
                    alt={user.name + "'s avatar"}
                    className="!object-contain"
                  />
                </AnimatedPopperContent>
              </AnimatedPopper>
              <TooltipProvider>
                <div className="flex gap-2 items-center">
                  <Tooltip>
                    <Dropzone
                      accept={{
                        'image/png': ['.png'],
                        'image/jpg': ['.jpg'],
                        'image/jpeg': ['.jpeg'],
                      }}
                      disabled={isUploading}
                      multiple={false}
                      onDrop={(acceptedFiles, fileRejections) => {
                        if (fileRejections.length > 0) {
                          console.log(fileRejections);
                        } else {
                          startUploadTransition(async () => {
                            try {
                              const res = await uploadFile({
                                file: acceptedFiles[0],
                                prefix: 'avatars',
                              });
                              if (res?.status === 'success') {
                                await updateProfile({
                                  avatar: res?.data?.fileUrl,
                                });
                              }
                            } catch (error) {
                              toast.error((error as ServerResponse).message);
                            }
                          });
                        }
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <TooltipTrigger asChild>
                          <Button
                            aria-label="Upload photo"
                            type="button"
                            disabled={isUploading}
                            {...getRootProps()}
                            iconOnly
                          >
                            <CloudUpload />
                            <input
                              {...getInputProps()}
                              disabled={isUploading}
                              className="z-0"
                            />
                          </Button>
                        </TooltipTrigger>
                      )}
                    </Dropzone>
                    <TooltipContent>
                      {isUploading ? 'Uploading' : 'Upload'}
                    </TooltipContent>
                  </Tooltip>
                  {!user.avatar.includes('avatar.vercel.sh') && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="destructive"
                          iconOnly
                          disabled={isDeleting}
                          aria-label="Delete avatar"
                          onClick={() =>
                            startDeleteTransition(async () => {
                              try {
                                await deleteFile({
                                  filename:
                                    user.avatar
                                      .split('/')
                                      .at(-1)
                                      ?.split('?')
                                      .at(0) || '',
                                  prefix: 'avatars',
                                });

                                await updateProfile({
                                  avatar: `https://avatar.vercel.sh/${user.name}`,
                                });
                              } catch (error) {
                                toast.error((error as ServerResponse).message);
                              }
                            })
                          }
                        >
                          {isDeleting ? (
                            <LoadingDots size="small" />
                          ) : (
                            <Trash />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Delete avatar</TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </TooltipProvider>
            </div>
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
