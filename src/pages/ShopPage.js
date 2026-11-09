import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiGrid, FiList, FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import products, { categories } from '../data/products';
import './ShopPage.css';

const priceRanges = [
  { label: 'Dưới 500.000đ', min: 0, max: 500000 },
  { label: '500.000đ - 1.000.000đ', min: 500000, max: 1000000 },
  { label: '1.000.000đ - 2.000.000đ', min: 1000000, max: 2000000 },
  { label: 'Trên 2.000.000đ', min: 2000000, max: Infinity },
];

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(() => {
    return categoryParam ? [categoryParam] : [];
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
      setCurrentPage(1);
    }
  }, [categoryParam]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
    setCurrentPage(1);
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSelectedSizes([]);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase().trim();
      result = result.filter(p =>
        p.name.toLowerCase().includes(kw) ||
        p.category.toLowerCase().includes(kw) ||
        p.description.toLowerCase().includes(kw)
      );
    }
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter(p => p.price >= range.min && p.price < range.max);
    }
    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }
    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return result;
  }, [searchKeyword, selectedCategories, selectedPriceRange, selectedSizes, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const hasFilters = selectedCategories.length > 0 || selectedPriceRange !== null || selectedSizes.length > 0;

  return (
    <div className="shop">
      {/* Header */}
      <div className="shop__header">
        <div className="container">
          <div className="shop__breadcrumb">
            <Link to="/">Trang chủ</Link> <span>/</span> <Link to="/shop" onClick={clearFilters}>Cửa hàng</Link>
            {selectedCategories.length === 1 && (
              <>
                <span>/</span> <span>{selectedCategories[0]}</span>
              </>
            )}
            {searchKeyword && (
              <>
                <span>/</span> <span>Tìm kiếm: "{searchKeyword}"</span>
              </>
            )}
          </div>
          <h1 className="shop__title">
            {searchKeyword
              ? `Tìm kiếm: "${searchKeyword}"`
              : selectedCategories.length === 1
              ? `Danh Mục: ${selectedCategories[0]}`
              : 'Cửa Hàng'}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="shop__content">
          {/* Mobile Filter Toggle */}
          <button className="shop__filter-toggle" onClick={() => setMobileFilterOpen(true)}>
            <FiFilter /> Bộ lọc
          </button>

          {/* Sidebar */}
          <aside className={`shop__sidebar ${mobileFilterOpen ? 'shop__sidebar--open' : ''}`}>
            <div className="shop__sidebar-header">
              <h3>Bộ Lọc</h3>
              <button className="shop__sidebar-close" onClick={() => setMobileFilterOpen(false)}>
                <FiX />
              </button>
            </div>

            {/* Categories */}
            <div className="shop__filter-group">
              <h4 className="shop__filter-title">Danh mục</h4>
              {categories.map(cat => {
                const count = products.filter(p => p.category === cat).length;
                return (
                  <label key={cat} className="shop__checkbox">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="shop__checkbox-custom" />
                    <span className="shop__checkbox-label">{cat}</span>
                    <span className="shop__category-count">({count})</span>
                  </label>
                );
              })}
            </div>

            {/* Price */}
            <div className="shop__filter-group">
              <h4 className="shop__filter-title">Giá</h4>
              {priceRanges.map((range, i) => (
                <label key={i} className="shop__checkbox">
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPriceRange === i}
                    onChange={() => { setSelectedPriceRange(i); setCurrentPage(1); }}
                  />
                  <span className="shop__checkbox-custom shop__checkbox-custom--radio" />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>

            {/* Sizes */}
            <div className="shop__filter-group">
              <h4 className="shop__filter-title">Kích cỡ</h4>
              <div className="shop__sizes">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    className={`shop__size-btn ${selectedSizes.includes(size) ? 'shop__size-btn--active' : ''}`}
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {hasFilters && (
              <button className="shop__clear-filters" onClick={clearFilters}>
                Xóa bộ lọc
              </button>
            )}
          </aside>

          {/* Overlay for mobile */}
          {mobileFilterOpen && (
            <div className="shop__overlay" onClick={() => setMobileFilterOpen(false)} />
          )}

          {/* Main */}
          <div className="shop__main">
            <div className="shop__toolbar">
              <span className="shop__result-count">
                Hiển thị {paginatedProducts.length} / {filteredProducts.length} sản phẩm
              </span>
              <div className="shop__toolbar-right">
                <div className="shop__sort">
                  <FiChevronDown className="shop__sort-icon" />
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="newest">Mới nhất</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="rating">Đánh giá cao</option>
                  </select>
                </div>
                <div className="shop__view-toggle">
                  <button
                    className={viewMode === 'grid' ? 'active' : ''}
                    onClick={() => setViewMode('grid')}
                  ><FiGrid /></button>
                  <button
                    className={viewMode === 'list' ? 'active' : ''}
                    onClick={() => setViewMode('list')}
                  ><FiList /></button>
                </div>
              </div>
            </div>

            {paginatedProducts.length === 0 ? (
              <div className="shop__empty">
                <p>Không tìm thấy sản phẩm phù hợp</p>
                <button className="btn btn-primary" onClick={clearFilters}>Xóa bộ lọc</button>
              </div>
            ) : (
              <div className={`shop__grid ${viewMode === 'list' ? 'shop__grid--list' : ''}`}>
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="shop__pagination">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`shop__page-btn ${currentPage === i + 1 ? 'shop__page-btn--active' : ''}`}
                    onClick={() => { setCurrentPage(i + 1); window.scrollTo(0, 300); }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

