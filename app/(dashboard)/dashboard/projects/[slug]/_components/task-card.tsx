import { Check } from 'lucide-react';
import Badge from '@/components/ui/badge';
import { formatDistance } from 'date-fns';
import { useRef, useState, useTransition } from 'react';
import { addTaskToCompleted } from '@/actions/task.action';

export default function TaskCard({
  task,
  onComplete,
}: {
  task: Task;
  onComplete: (id: string) => void;
}) {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPending, startTransition] = useTransition();

  function initializeAudio() {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/sounds/complete-task-sound.mp3');
      audioRef.current.onended = () => setIsPlayingSound(false);
    }
  }

  function playAudio() {
    initializeAudio();

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlayingSound(true);
    }
  }

  return (
    <div className="rounded-lg relative border p-3 bg-background-100 hover:border-gray-500 transition-colors">
      <div className="space-y-2">
        <div className="flex items-center gap-3 divide-x">
          <button
            disabled={isPending || isPlayingSound}
            onClick={() =>
              startTransition(async () => {
                onComplete(task.id);
                playAudio();
                await addTaskToCompleted(task.id);
              })
            }
            className="hover:border-gray-500 group center size-6 rounded-full shrink-0 border text-gray-alpha-600"
          >
            <Check
              size={14}
              className="group-hover:opacity-100 opacity-0 transition-opacity"
            />
          </button>
          <div className="space-y-1 pl-3">
            <h4 className="text-sm font-medium">{task.name}</h4>
            <p className="text-gray-900">{task.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 border-t pt-3">
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <div className="text-xs text-gray-900">Due date:</div>
              <Badge variant="pink-subtle">
                {formatDistance(task.dueDate || '', new Date())} left
              </Badge>
            </div>
          )}
          {task.tags.length > 0 && (
            <div className="flex items-center gap-1">
              <div className="text-xs text-gray-900">Tags:</div>
              {task.tags.map((tag) => (
                <Badge variant="purple-subtle" key={tag.id}>
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
