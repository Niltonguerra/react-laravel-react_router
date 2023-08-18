<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    // foi criado uma migrate para a tabela students
    protected $table = 'students';

    protected $fillable = [
        'name',
        'course',
        'email',
        'phone',
    ];
}
