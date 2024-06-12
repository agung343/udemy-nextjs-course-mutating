// reseved name api handler route.js
// GET, POST, PATCH, DELETE are reserved name function
// update for branch 05

export function GET(request) {
    console.log(request)

    return Response.json({
        message: "Hello!"
    })
}

export function POST() {

}

export function DELETE() {

}