<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;

//importante para API laravel-react!!!
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */

    //  o metodo boot() é executado ao iniciar o laravel
    public function boot(): void
    {
        //importante para API laravel-react!!!

        // explicação:
            //Portanto, ao incluir Schema::defaultStringLength(191) no método boot,
            // você está configurando a aplicação Laravel para que o comprimento padrão das colunas
            // do tipo string seja de 191 caracteres, garantindo que elas funcionem corretamente em
            // bancos de dados com limitações de tamanho de índice. Isso é particularmente
            // útil quando você está construindo uma API Laravel que será consumida por um aplicativo
            // frontend React, onde as configurações de comprimento de string podem se tornar relevantes.
        Schema::defaultStringLength(191);


    }
}
