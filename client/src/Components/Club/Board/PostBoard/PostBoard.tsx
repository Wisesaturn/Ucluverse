import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useCheckRole from '../../../../Hooks/useCheckRole';
import { PostTitleType } from '../../../../Types/PostType';
import api from '../../../../Util/helpers/Auth/Api';
import Button from '../../../Button/Button';
import PostTitle from '../../Post/Title/PostTitle';
import { ClubBoardContainer, PostContainer } from './style';

interface IProps {
  boardIdx: number;
  clubId: number;
  boardName: string;
}

const sortFunc = (a: PostTitleType, b: PostTitleType) => {
  if (a.type === '공지사항' && b.type === '공지사항') {
    return 0;
  }
  if (a.type === '공지사항') {
    return -1;
  }
  return 1;
};

function PostBoard(props: IProps) {
  const { boardIdx, clubId, boardName } = props;
  const [postList, setPostList] = useState<PostTitleType[]>([]);
  const role = useCheckRole(clubId);
  useEffect(() => {
    if (boardName === '전체 게시판') {
      api.get(`/postings/club/entire/${clubId}`).then((res) => {
        setPostList(res.data.res.postings.sort(sortFunc) ?? []);
      });
    } else {
      api.get(`/postings/clubBoard/${boardIdx}`).then((res) => {
        setPostList(res.data.res.postings);
      });
    }
  }, [boardName]);
  const setToast = (message: string) => {
    toast(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const clickEvent = () => {
    if (role === 0) {
      setToast('회원이 아닙니다.');
    } else if (boardName === '공지사항' && role !== 2) {
      console.log(role);
      setToast('임원진이 아닙니다.');
    } else {
      window.history.pushState({ boardIdx, boardName }, '', `/club/${clubId}/posting`);
      window.location.href = `/club/${clubId}/posting`;
    }
  };
  return (
    <ClubBoardContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>{boardName}</span>
        </div>
        <PostContainer>
          {postList.map((post) => (
            <PostTitle
              key={post.createdAt}
              title={post.title}
              author={post.author}
              date={post.createdAt}
              type={post.type}
              postId={post.postingIdx}
              clubId={clubId}
            />
          ))}
        </PostContainer>
      </div>
      {boardName !== '전체 게시판' && <Button name="글작성" clickEvent={clickEvent} />}
    </ClubBoardContainer>
  );
}
export default PostBoard;
