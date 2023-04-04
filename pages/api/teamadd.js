

export default function teamAdd(req,res) {

  if(req.method === "POST") {
    const reqPayload = req?.body

    console.log("Req payload: ",reqPayload)
  
    return res.json({msg:"Submitted Successfully"})
  }else {
    return res.status(500).json ({
      msg:"Failed to Fetch"
    })
  }

 
}