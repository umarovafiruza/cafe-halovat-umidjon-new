'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { CategoryId } from '../types';
import { FoodCard } from './FoodCard';
import { 
  Search, 
  X, 
  LayoutGrid, 
  Utensils, 
  Sandwich, 
  Egg, 
  GlassWater, 
  Cake 
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-4 h-4" />,
  Utensils: <Utensils className="w-4 h-4" />,
  Sandwich: <Sandwich className="w-4 h-4" />,
  Egg: <Egg className="w-4 h-4" />,
  GlassWater: <GlassWater className="w-4 h-4" />,
  Cake: <Cake className="w-4 h-4" />
};

export const MenuSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter menu items based on category and search text
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.categoryId !== activeCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const nameUz = item.name.uz.toLowerCase();
        const nameRu = item.name.ru.toLowerCase();
        const descUz = item.description.uz.toLowerCase();
        const descRu = item.description.ru.toLowerCase();
        return (
          nameUz.includes(q) ||
          nameRu.includes(q) ||
          descUz.includes(q) ||
          descRu.includes(q)
        );
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-amber-700 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <span>✨ Halovat Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a120b] tracking-tight">
            {t('menuTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mt-3.5 rounded-full" />
          <p className="text-cafe-700 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            {t('menuSubtitle')}
          </p>
        </div>

        {/* Categories Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-cafe-100/50 p-2 rounded-3xl border border-cafe-200/80 shadow-sm backdrop-blur-md">
          
          {/* Categories Horizontal Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto p-1">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? MENU_ITEMS.length 
                : MENU_ITEMS.filter(m => m.categoryId === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#2a1810] to-[#543727] text-amber-100 shadow-[0_4px_15px_rgba(42,24,16,0.25)] scale-[1.02] border border-amber-900/30'
                      : 'bg-white/80 hover:bg-white text-cafe-800 border border-cafe-200/80 shadow-sm hover:text-cafe-950'
                  }`}
                >
                  <span className={isSelected ? 'text-amber-300' : 'text-amber-700'}>
                    {CATEGORY_ICONS[cat.icon] || <Utensils className="w-4 h-4" />}
                  </span>
                  <span>{cat.name[language]}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-amber-200' : 'bg-cafe-200/70 text-cafe-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 p-1">
            <Search className="w-4 h-4 text-amber-700 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-white border border-cafe-200/90 text-cafe-950 placeholder:text-cafe-400 pl-10 pr-9 py-2.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-cafe-400 hover:text-cafe-800"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Food Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          /* Empty Search Results */
          <div className="text-center py-20 px-4 bg-white/90 rounded-3xl border border-cafe-200 shadow-sm max-w-md mx-auto animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-cafe-950">
              {t('notFound')}
            </h3>
            <p className="text-cafe-600 text-xs sm:text-sm mt-2 max-w-xs mx-auto">
              {t('tryOtherSearch')}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-6 bg-[#2a1810] text-amber-100 hover:text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#1a120b] transition-all shadow-md active:scale-95"
            >
              {t('allFilter')}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
