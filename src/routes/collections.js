import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.collections));
});

router.get('/:userId', (req, res) => {

  let resp = Object.values(req.context.models.collections)
  .filter((data) => data.userid == req.params.userId);

  if(resp && resp.length) {
      return res.send(resp).status(200);
  }

  return res.send([]).status(200);
});

router.get('/collectionId/:collectionId', (req, res) => {

  let resp = Object.values(req.context.models.collections)
  .filter((data) => data.id == req.params.collectionId);

  if(resp && resp.length) {
      return res.send(resp).status(200);
  }

  return res.send([]).status(200);
});

export default router;
