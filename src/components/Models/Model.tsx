"use client";
import { IoMdClose } from "react-icons/io";

import React, { FC, useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";
interface ModelProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  actionLabel?: string;
  disabled?: boolean;
}

const Model: FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  secondaryAction,
  secondaryActionLabel,
  actionLabel,
  disabled,
}) => {
  const [showModel, setShowModel] = useState(isOpen);
  useEffect(() => {
    setShowModel(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModel(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="
        justify-center
        items-center 
        flex 
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-700/70
     "
      >
        <div
          className="
            relative 
            w-full 
            md:w-4/6 
            lg:3/6
            xl:2/5
            my-6 
            mx-auto
            h-full
            lg:h-auto
            md:h-auto
        "
        >
          {/* CONTENT */}
          <div
            className={`
                translate
                duration-300
                h-full
                ${showModel ? "translate-y-0" : "translate-y-full"}
                ${showModel ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="
                    translate
                    h-full
                    lg:h-auto
                    md:h-auto
                    border-0
                    rounded-lg
                    shadow-lg
                    relative
                    flex
                    flex-col
                    w-full
                    bg-white
                    outline-none
                    focus:outline-none
                "
            >
              {/* HEADER */}
              <div
                className="
                    flex
                    items-center
                    rounded-t
                    p-6
                    justify-center
                    relative
                    border-b-[1px]
                    "
              >
                <button
                  className="
                            p-1
                            border-0
                            hover:opacity-70
                            transition
                            absolute
                            left-9

                        "
                        onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>

                <div className="text-lg font-semibold ">{title}</div>
              </div>

              {/* BODY */}
              <div className="relative p-6 flex-auto">{body}</div>

              {/* FOOTER */}

              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryActionLabel && secondaryAction && (
                    <Button
                      outline
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      disabled={disabled}
                    />
                  )}
                  {actionLabel && (
                    <Button
                      label={actionLabel}
                      onClick={handleSubmit}
                      disabled={disabled}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
