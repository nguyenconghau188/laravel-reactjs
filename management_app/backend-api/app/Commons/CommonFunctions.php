<?php 
namespace App\Commons;

use App\Commons\CommonConstants;

class CommonFunctions {
    public static function generateUserId($length_of_string=CommonConstants::USER_ID_LENGTH) {
        return substr(md5(uniqid().time()), 0, $length_of_string);
    }

    public static function generateSuccessResponse($data) {
        return 1;
    }
}
