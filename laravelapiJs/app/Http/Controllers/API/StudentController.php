<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


// não esqueça de importar o model criado!!!
use App\Models\Student;
//  use Dotenv\Validator;
use Illuminate\Support\Facades\Validator;



class StudentController extends Controller
{


    public function store(Request $request)
    {
        // validação dos dados
        $validator = Validator::make($request->all(),[
            'name' => 'required|max:191',
            'course' => 'required|max:191',
            'email' => 'required|email|max:191',
            'phone' => 'required|digits:10',
        ]);

        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }else{
            // aqui ele vai instaciar o model de student encontrado em: App\Models\Student
            // e vai puxar as informações enviadas pela api
            //resumindo
            //vai pegar as informações que a api está recebendo do react
            $student = new Student();
            $student->name = $request->input('name');
            $student->course = $request->input('course');
            $student->email = $request->input('email');
            $student->phone = $request->input('phone');
            //aqui ele vai enviar os dados para serem salvos no banco de dados
            $student->save();
            return response()->json([
            'status' => 200,
            'message' => 'estudante cadastrado com sucesso!',
            ]);
        }
    }











    public function index(){
    $students = Student::all();

    return response()->json([
        'status' => 200,
        'students' => $students,
     ]);
}




public function edit($id){


    $student = Student::find($id);


    if($student){
        return response()->json([
            'status' => 200,
            'student' => $student,
        ]);
    }else{
        return response()->json([
            'status' => 404,
            'message' => 'ID do estudante não encontrado!',
        ]);
    }





}



public function update(Request $request, $id)
{
    // encontra o aluno pelo id enviado pela api
    $student = Student::find($id);

    // pega os dados e define os campos que eles seram colocados no DB
    $student->name = $request->input('name');
    $student->course = $request->input('course');
    $student->email = $request->input('email');
    $student->phone = $request->input('phone');

    // envia os dados para serem atualizados
    $student->update();

    return response()->json([
       'status' => 200,
       'message' => 'estudante atualizado com sucesso!',
    ]);
}



public function destroy($id){
    $student = Student::find($id);
    $student->delete();
    return response()->json([
        'status' => 200,
        'message' => 'estudante deletado com sucesso!',

    ]);
}



}
