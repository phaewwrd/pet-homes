import axios from "axios"

export const actionAdminInfo = async (token) => {
      const res = await axios.get("http://localhost:8800/admin/info", {
        headers: {
          Authorization: `Bearer ${token}`,  // Ensure token is passed here
        }
      });
      return res.data;
      
}