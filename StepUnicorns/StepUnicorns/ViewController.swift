//
//  ViewController.swift
//  StepUnicorns
//
//  Created by Pili A. on 07/07/2018.
//  Copyright © 2018 ExampleTeam. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet var startGameButton: UIButton!
    
    @IBOutlet var goodButton: UIButton!
    @IBOutlet var badButton: UIButton!
    @IBOutlet var leaderboardButton: UIButton!
    @IBOutlet var pointsLabel: UILabel!
    
    var gameButtons = [UIButton]()
    var gamePoints = 0
    
    enum GameState {
    case gameOver
    case playing
    }
    
    var state = GameState.gameOver
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        pointsLabel.isHidden = true
        
        gameButtons = [goodButton, badButton]
        
        setupFreshGameState()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func startPressed(_ sender: Any) {
        startNewGame()
        print("Start game button was pressed")
    }
    
    @IBAction func goodPressed(_ sender: Any) {
        gamePoints = gamePoints + 1
        updatePointsLabel(gamePoints)
        goodButton.isHidden = true
        timer?.invalidate()
        oneGameRound()
    }
    
    @IBAction func badPressed(_ sender: Any) {
        badButton.isHidden = true
        timer?.invalidate()
        gameOver()
    }
    
    var timer: Timer?
    var currentButton: UIButton!

    
    func startNewGame() {
        startGameButton.isHidden = true
        leaderboardButton.isHidden = true
        gamePoints = 0
        updatePointsLabel(gamePoints)
        pointsLabel.textColor = .magenta
        pointsLabel.isHidden = false
        oneGameRound()
    }
    
    func oneGameRound() {
        updatePointsLabel(gamePoints)
        displayRandomButton()
        
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: false) { _ in
            if self.state == GameState.playing {
                if self.currentButton == self.goodButton {
                    self.gameOver()
                } else {
                    self.oneGameRound()
                }
            }
        }
    }
    
    func displayRandomButton() {
        for mybutton in gameButtons {
            mybutton.isHidden = true
        }
        let buttonIndex = Int.random(in: 0..<gameButtons.count)
        currentButton = gameButtons[buttonIndex]
        currentButton.center = CGPoint(x: randomXCoordinate(), y: randomYCoordinate())
        currentButton.isHidden = false
    }
    
    func gameOver() {
        state = GameState.gameOver
        pointsLabel.textColor = .brown
        setupFreshGameState()
    }
    
    func setupFreshGameState() {
        startGameButton.isHidden = false
        leaderboardButton.isHidden = false
        for mybutton in gameButtons {
            mybutton.isHidden = true
        }
        pointsLabel.alpha = 0.15
        currentButton = goodButton
        state = GameState.gameOver
    }
    
    func randCGFFloat(_ min: CGFloat, _ max: CGFloat) -> CGFloat {
        return CGFloat.random(in: min..<max)
    }
    
    func randomXCoordinate() -> CGFloat {
        let left = view.safeAreaInsets.left + currentButton.bounds.width
        let right = view.bounds.width - view.safeAreaInsets.right - currentButton.bounds.width
        return randCGFFloat(left, right)
    }
    
    func randomYCoordinate() -> CGFloat {
        let top = view.safeAreaInsets.top + currentButton.bounds.height
        let bottom = view.bounds.height - view.safeAreaInsets.bottom - currentButton.bounds.height
        return randCGFFloat(top, bottom)
    }
    
    func updatePointsLabel(_ newValue: Int) {
        pointsLabel.text = "\(newValue)"
    }
    
}

