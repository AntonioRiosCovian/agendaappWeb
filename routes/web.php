<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Models\User;
use App\Notifications\PushNotification;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Notification;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('userAll', [AuthController::class, 'userAll']);
Route::get('/send-test-notification', function () {
    $users = User::all();
    $user->notify(new PushNotification());

    return "Notificación de prueba enviada.";
});
Route::get('/send-fcm-notification', function () {
    $fcmToken = 'dvjVhgkBhkygr2vbhaVgbC:APA91bGJf2svB7B6atCxhJMH4eagZW9u6p9j7rRu_r0VHQrsG2sq91k04nnaCAPaqv290TqoYLF7wtvugQlWBGzkeFGPWAqoGJ769WRyR0VpXm5dYsrT2MrKmtjzaH3oQFcw_CWid79Y';
    $notifiable = new class {
        use Notifiable;

        public function routeNotificationForFcm()
        {
            return $this->fcmToken;
        }

        public $fcmToken;
    };
    $notifiable->fcmToken = $fcmToken;
    $notification = new \App\Notifications\PushNotification();
    $notification->toFcm($notifiable);

    return "Notificación FCM enviada.";
});
