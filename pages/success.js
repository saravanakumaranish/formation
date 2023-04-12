import {Heading,Text,Center} from "@chakra-ui/react"
import {useState} from 'react'

function Home1() {
  const[comments,setComments]=useState([])

  const fetchComments = async () => {
    const response = await fetch("/api/comments")
    const data= await response.json()
    setComments(data)
 }

 const deleteComment = async (commentId) => {
  const response = await fetch(`/api/comments/${commentId}`,{
    method:"DELETE"
  })
  const data = await response.json()
  console.log(data)
  fetchComments()

}

const updateComment = async (commentId) => {
const response = await fetch(`/api/comments/${commentId}`,{
  method:"PUT",
  body:JSON.stringify({first,last,email,phone}),
  headers:{
    'Content-Type' : 'application/json',
   
  }
})
const data = await response.json()
console.log(data)
// fetchComments()

}


  return (
    <>

<button onClick={fetchComments}>Show Comments</button>
{comments.map(comment => {
        return (
          <div key={comment.id}>
            id:{comment.id}
           First: {comment.first},
           Last: {comment.last},
           Email: {comment.email},
           Phone: {comment.phone}.
            <button onClick={()=>updateComment(comment.id)}>Update</button>
             <button onClick={()=>deleteComment(comment.id)}>Delete</button>
          </div>
        )
      })
    }




    <Center h="100vh">
    <Heading color="Red">
      Form Submitted Successfully! 
    </Heading>
    </Center>
   
   
    </>
  )
}


export default Home1;