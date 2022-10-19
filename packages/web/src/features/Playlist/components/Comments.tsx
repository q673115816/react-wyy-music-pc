import React, { memo, useCallback, useRef } from "react";
import CommentsList from "@/components/Comments/CommentsList";
import { Textarea } from "@/components/editor";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/Toast";
import {
  usePostCommentMutation,
  useGetCommentPlaylistQuery,
} from "@/modules/services/comment";

const Comments = () => {
  const toast = useToast();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { id = 0 } = useParams();
  const { data, isLoading } = useGetCommentPlaylistQuery({
    id,
  });

  const [commentPost, { isLoading: commentIsLoading }] =
    usePostCommentMutation();

  const handleChange = useCallback(() => {}, []);
  const onclick = useCallback(async () => {
    if (!textareaRef.current) return;
    if (!textareaRef.current.value) toast("写些东西吧，内容不能为空哦!");
    try {
      const res = await commentPost({
        id,
        t: 1,
        type: 2,
        content: textareaRef.current.value,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="px-8">
      {/* TODO */}
      <div className="pt-10 pb-10">
        <Textarea
          ref={textareaRef}
          max={140}
          placeholder={""}
          onChange={handleChange}
        />
        <div className={`flex justify-end mt-2`}>
          <button
            onClick={onclick}
            type="button"
            className={`flex-center text-sm border px-4 h-8 rounded-full hover:bg-gray-50`}
          >
            评论
          </button>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <CommentsList comments={data} type={0} more={id} />
      )}
    </div>
  );
};
export default memo(Comments);
