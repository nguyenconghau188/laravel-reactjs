<?php 
  namespace App\Commons;
  
  use App\Commons\Constants;

  class CommonFunctions
  {
    //function generate uuid for user
    public static function generateUuid()
    {
      return substr(md5(uniqid().time()), 0, Constants::USER_ID_LENGTH);
    }
  }
  

?>