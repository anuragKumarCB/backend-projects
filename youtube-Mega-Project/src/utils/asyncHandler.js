const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => { next(err) })
    }
}

export { asyncHandler }

// -------------------- second way -------------------
// how function is created !!!!
// const asyncHandler = () => { }
// const asyncHandler = () => { () => { } }
// const asyncHandler = () =>  () => { }
// const asyncHandler = () => async () => { }

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//     try {
//         await requestHandler(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).jsoo({
//             message: error.message,
//             success: false
//         })
//     }
// }