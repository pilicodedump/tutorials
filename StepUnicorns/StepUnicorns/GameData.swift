//
//  GameData.swift
//  StepUnicorns
//
//  Created by Pili A. on 16/07/2018.
//  Copyright © 2018 ExampleTeam. All rights reserved.
//

import Foundation

internal class GameData: NSObject {
    
    internal func savedPoints(_ points: Int, for name: String)
    internal func playerData(forRank rank: Int) -> PlayerData
    internal var numberOfPlayers: Int { get }
    
}
