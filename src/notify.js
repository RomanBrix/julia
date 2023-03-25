import axios from "axios";

const token = '5785178470:AAFpoEeATjzhmFGtwhWUzL160kSmlJ6a6OE';
  const feedback_accounts = ['5775759209', '181045826'];

  const api_url =
    "https://api.telegram.org/bot[TOKEN]/sendMessage?chat_id=[USER_ID]&parse_mode=markdown&text=";
  
    
  export const notifyAdmin = (text) => {
    if(token.length < 1) return;
    let send_url = api_url.replace("[TOKEN]", token);
    feedback_accounts.forEach((account) => {
      axios.get(encodeURI(send_url.replace("[USER_ID]", account) + text));
    });
  };