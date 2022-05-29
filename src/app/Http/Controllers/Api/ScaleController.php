<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ScaleController extends Controller
{
    const DEFAULT_NOTES = [
        'C',
        'C#-Db',
        'D',
        'D#-Eb',
        'E',
        'F',
        'F#-Gb',
        'G',
        'G#-Ab',
        'A',
        'A#-Bb',
        'B',
        'C',
        'C#-Db',
        'D',
        'D#-Eb',
        'E',
        'F',
        'F#-Gb',
        'G',
        'G#-Ab',
        'A',
        'A#-Bb',
        'B',
    ];
    public function major(Request $request)
    {
        $rootNumber = $request->input('rootNumber');
        $notes=[
            'i' => self::DEFAULT_NOTES[$rootNumber],
            'ii' => self::DEFAULT_NOTES[$rootNumber+2],
            'iii' => self::DEFAULT_NOTES[$rootNumber+4],
            'iv' => self::DEFAULT_NOTES[$rootNumber+5],
            'v' => self::DEFAULT_NOTES[$rootNumber+7],
            'vi' => self::DEFAULT_NOTES[$rootNumber+9],
            'vii' => self::DEFAULT_NOTES[$rootNumber+11],
        ];
        // return view('app')->with('notes', $notes);
        return response()->json($notes, 200);
    }
}
