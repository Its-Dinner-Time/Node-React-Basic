import FavoriteRequest from './FavoriteRequest.js';
import FavoriteResponse from './FavoriteResponse.js';

export default function (root, app) {
  const LIKE = `${root}/like`;
  const LIKE_LIST = `${LIKE}/list`;
  const IS_LIKE = `${LIKE}/bool`;

  const COUNT = `${LIKE}/count`;

  const request = new FavoriteRequest(app);
  const response = new FavoriteResponse(app);

  // 좋아요 갯수
  app.get(COUNT, (req, res) => {
    response.getCount(req, res);
  });

  // 좋아요 확인
  app.get(IS_LIKE, (req, res) => {
    response.isLiked(req, res);
  });

  // 좋아요 리스트
  app.get(LIKE_LIST, (req, res) => {
    response.likeList(req, res);
  });

  // 좋아요 저장
  app.post(LIKE, (req, res) => {
    request.like(req, res);
  });

  // 좋아요 취소
  app.delete(LIKE, (req, res) => {
    request.unlike(req, res);
  });
}
