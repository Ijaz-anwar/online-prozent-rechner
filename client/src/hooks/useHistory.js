import { useState, useEffect } from 'react';

const STORAGE_KEY = 'pm_calc_history';
const MAX_HISTORY_ITEMS = 50;

export function useHistory() {
  const [history, setHistory] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
      console.error('Failed to save calculation history to localStorage', e);
    }
  }, [history]);

  const addHistoryItem = (item) => {
    const newItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      ...item
    };

    setHistory(prev => [newItem, ...prev.slice(0, MAX_HISTORY_ITEMS - 1)]);
  };

  const removeHistoryItem = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addHistoryItem,
    removeHistoryItem,
    clearHistory
  };
}
