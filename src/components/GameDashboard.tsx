
import React from 'react';
import GameHeader from './GameHeader';
import PortfolioSummary from './PortfolioSummary';
import AssetList from './AssetList';
import NewsPanel from './NewsPanel';
import { useGame } from '../contexts/GameContext';
import GameOverScreen from './GameOverScreen';
import RoundInfo from './RoundInfo';
import HoldingsList from './HoldingsList';
import SettingsDialog from './SettingsDialog';

const GameDashboard = () => {
  const { state } = useGame();

  if (state.isGameOver) {
    return <GameOverScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SettingsDialog onClose={() => {}} />
      <div className="container mx-auto p-4 space-y-6">
        <GameHeader />
        <PortfolioSummary />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AssetList />
          </div>
          <div className="space-y-6">
            <RoundInfo />
            <HoldingsList />
            <NewsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
