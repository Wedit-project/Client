import { serverInstance } from "../utils/apiIntance.js";

const getMembers = async () => {

    let url = `/api/members`;

    console.log(url);

    try {
        const { data } = await serverInstance.get(url);
        return data.success.data;
    } catch (error) {
        console.error;
    }
};

export { getMembers };