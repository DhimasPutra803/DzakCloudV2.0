<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price_label',
        'features',
        'highlighted'
    ];

    protected $casts = [
        'features' => 'array',
        'highlighted' => 'boolean'
    ];

    public $timestamps = true;
}
