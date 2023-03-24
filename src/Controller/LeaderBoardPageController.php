<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LeaderBoardPageController extends AbstractController
{
    #[Route('/leader/board/page', name: 'app_leader_board_page')]
    public function index(): Response
    {
        return $this->render('leader_board_page/index.html.twig', [
            'controller_name' => 'LeaderBoardPageController',
        ]);
    }
}
