import express from 'express';

import { getPosts, getPostsBySearch, getPostsByCreator, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import authentication from "../middleware/authentication.js";

router.get('/creator', getPostsByCreator);
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', authentication,  createPost);
router.patch('/:id', authentication, updatePost);
router.delete('/:id', authentication, deletePost);
router.patch('/:id/likePost', authentication, likePost);
router.post('/:id/commentPost', commentPost);

export default router;