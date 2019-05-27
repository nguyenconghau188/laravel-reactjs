<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <!-- <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css"> -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <!-- <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet" type="text/css"> -->
    <body>
        <div id="example"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>