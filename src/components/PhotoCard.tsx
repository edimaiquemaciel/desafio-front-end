import Image from 'next/image';
import { Photo } from '../types/photo';

type Props = {
  photo: Photo;
};


export function PhotoCard({ photo }: Props) {
  return (
    <div className="cursor-pointer shadow-sm hover:shadow-lg transition rounded-none md:rounded-xl">
        <Image
          className="h-80 w-full object-cover rounded-none md:rounded-t-xl duration-300"
          src={photo.urls.regular}
          alt={photo.alt_description || 'Imagem Unsplash'}
          width={800}
          height={600}
          loading="lazy"
          placeholder="blur"
          blurDataURL={photo.urls.thumb}
        />
        <div className="flex justify-between items-center gap-2 space-x-3 my-2 mx-4">
          <div className="flex justify-between items-center gap-4">
            <Image
              src={photo.user.profile_image.medium}
              alt={`Foto de perfil de ${photo.user.name}`}
              width={40}
              height={40}
              className="rounded-full shadow-sm"
              loading="lazy"
            />
            <span>
              <a
                className="font-medium hover:underline transition ease-in-out duration-400"
                href={`https://unsplash.com/@${photo.user.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {photo.user.name}
              </a>
            </span>
          </div>
        </div>
    </div>
  )
}
