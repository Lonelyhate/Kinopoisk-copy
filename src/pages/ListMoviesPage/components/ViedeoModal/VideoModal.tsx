import React, { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './VideoModal.scss';
import cn from 'classnames';
import { IMovie, IVideoMovie } from '../../../../types/types';
import loaderUrl from '../../../../assets/img/loader.gif';

interface VideoModalProps {
    visable: boolean;
    closeModal: () => void;
    video: IVideoMovie | null;
    loading: boolean;
    movie: IMovie | null
}

const VideoModal: FC<VideoModalProps> = ({ visable, closeModal, video, loading, movie }) => {
    return (
        <div
            onClick={closeModal}
            className={cn('video-modal', {
                active: visable,
            })}>
            {!loading ? (
                <div onClick={(e) => e.stopPropagation()} className="video-modal__content">
                    {video?.url && (
                        <iframe
                            width="60%"
                            height="100%"
                            src="https://www.youtube.com/embed/GNrdg3PzpJQ"
                            title="Youtube Video Player"
                            frameBorder={0}></iframe>
                    )}
                    <div className="video-modal__info">
                        <div className="video-modal__img">
                            <img src={movie?.posterUrlPreview} alt="" />
                        </div>
                        <div className="video-modal__text">
                            <h3 className="video-modal__title">{movie?.nameRu}</h3>
                        </div>
                    </div>
                </div>
            ) : (
                <img src={loaderUrl} alt='load' />
            )}
        </div>
    );
};

export default VideoModal;
