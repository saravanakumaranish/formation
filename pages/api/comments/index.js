import {comments} from "../../../data/comments"

export default function handler(req,res) {
 
  if(req.method==="GET") {
    res.status(200).json(comments)
  }else if (req.method === "POST") {
    const first = req.body.first
    const last = req.body.last
    const email = req.body.email
    const phone = req.body.phone
    const newComment = {
      id:Date.now(),
      first:first,
      last:last,
      email:email,
      phone:phone,
    }
    comments.push(newComment)
    res.status(201).json(newComment)
    // res.status(200).json(comment)
  }
  
}