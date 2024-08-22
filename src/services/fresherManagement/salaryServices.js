import { useApi } from "services/api";
const IDENTITY_API_URL = "https://admin-tool-api-gateway-bu.herokuapp.com/";
const usePublicApi = () => useApi(IDENTITY_API_URL, false);

export const salaryServices = {
    getAllSalary: async (iClass, iMonth, iYear) => {
        return usePublicApi().get(
            `user-service/api/salary/class/${iClass}/year/${iYear}/month/${iMonth}/page/1/page-size/1000`
        );
    },
    getClassListOfYear: async (iYear) => {
        return usePublicApi().get(
            `class-service/api/classes/year/${iYear}`
        );
    }

};

export default salaryServices;