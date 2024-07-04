import instance from "../utils/instance"

export const searchNoticeBoardRequest = async(params) => {
    return await instance.get("/notice/boards",{params})
}