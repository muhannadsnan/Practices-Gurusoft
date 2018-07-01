<?php
use Kreait\Firebase;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Database;
use App\Cat;

namespace App\Http\Controllers;

class HoController extends Controller
{
    public function __construct()
    {
        //
    }

    public function test(){
        // return ['title' => 'BMW'];
        $serviceAccount = \Kreait\Firebase\ServiceAccount::fromJsonFile(__DIR__.'/google-service-account.json');
 
        $firebase = (new \Kreait\Firebase\Factory)
        
            ->withServiceAccount($serviceAccount)
            
            ->withDatabaseUri('https://test-firebase-597da.firebaseio.com/')
            
            ->create();
        
        $database = $firebase->getDatabase();
        
        $newPost = $database->getReference('test-lumen')
                        
                            ->push(['title'=>'111', 'price'=>99]);        
                        
        
        //$newPost->getKey(); // => -KVr5eu8gcTv7_AHb-3-        
        //$newPost->getUri(); // => https://my-project.firebaseio.com/blog/posts/-KVr5eu8gcTv7_AHb-3-        
        //$newPost->getChild('title')->set('Changed post title');        
        //$newPost->getValue(); // Fetches the data from the realtime database        
        //$newPost->remove();

        // https://firebase-php.readthedocs.io/en/latest/realtime-database.html
        
         return $newPost->getvalue();
    }
}
