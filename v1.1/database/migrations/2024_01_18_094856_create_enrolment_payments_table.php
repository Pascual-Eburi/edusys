<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enrolment_payments', function (Blueprint $table) {
            $table->id();
            $table->date('payment_date');
            $table->double('paid');
            $table->string('payment_type', 30);
            $table->unsignedBigInteger('enrolment_id');
            $table->timestamps();

            $table->foreign('enrolment_id')->references('id')->on('enrolments');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enrolment_payments');
    }
};
