<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GamePageController extends AbstractController
{
    #[Route('/game', name: 'app_game_page')]
    public function index(): Response
    {
        return $this->render('game_page/index.html.twig', [
            'controller_name' => 'GamePageController',
        ]);
    }
}
