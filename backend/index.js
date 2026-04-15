import express from 'express'


const app = express()

const port = process.env.PORT || 3000;



// app.get('/',(req,res)=>{
//     res.send("Hii, Welcome to my site")
// })

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: "my first joke",
            content: "Where do most horses live? In neighhh-borhoods!"
        },
        {
            id: 2,
            title: "my second joke",
            content: " Why did the Daddy Rabbit go to the barber? He had a lot of little hares"
        },
        {
            id: 3,
            title: "my third joke",
            content: " How do you make a lemon drop? Let it fall from the tree."
        },
        {
            id: 1,
            title: "my fourth joke",
            content: "Why can’t you ever trust atoms? Because they make up everything."
        },
        {
            id: 5,
            title: "my fifth joke",
            content: "which planet loves to sing? Nep-tune"
        },
        {
            id: 6,
            title: "my last joke",
            content: " What’s a private investigator’s favorite shoe? Sneak-ers"
        },
        
    ];
    res.send(jokes);

})

app.listen(port, ()=>{
    console.log(`port running on http://localhost:${port}`);
    
})



