<?php
//não esqueça de importar a classe 'StudentController'
use App\Http\Controllers\API\StudentController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// a rota é api/add-student, todavia, o 'api' da rota não precisa escrever pois está previamente definido no sistema
Route::post('/add-student',[StudentController::class,'store']);



//rota para resgatar as informações do aluno
Route::get('/students',[StudentController::class,'index']);


Route::get('edit-student/{id}',[StudentController::class,'edit']);


Route::put('update-student/{id}',[StudentController::class,'update']);


Route::delete('delete-student/{id}',[StudentController::class,'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
