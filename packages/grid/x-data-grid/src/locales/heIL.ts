import { heIL as heILCore } from '@mui/material/locale';
import { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, Localization } from '../utils/getGridLocalization';

const heILGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'אין שורות',
  noResultsOverlayLabel: 'לא נמצאו תוצאות.',
  errorOverlayDefaultLabel: 'אירעה שגיאה.',

  // Density selector toolbar button text
  toolbarDensity: 'צפיפות',
  toolbarDensityLabel: 'צפיפות',
  toolbarDensityCompact: 'דחוסה',
  toolbarDensityStandard: 'רגילה',
  toolbarDensityComfortable: 'אוורירית',

  // Columns selector toolbar button text
  toolbarColumns: 'עמודות',
  toolbarColumnsLabel: 'בחר עמודות',

  // Filters toolbar button text
  toolbarFilters: 'סינון',
  toolbarFiltersLabel: 'הצג מסננים',
  toolbarFiltersTooltipHide: 'הסתר מסננים',
  toolbarFiltersTooltipShow: 'הצג מסננים',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} מסננים פעילים` : `מסנן אחד פעיל`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'חיפוש...',
  toolbarQuickFilterLabel: 'חיפוש',
  toolbarQuickFilterDeleteIconLabel: 'ניקוי',

  // Export selector toolbar button text
  toolbarExport: 'ייצוא',
  toolbarExportLabel: 'ייצוא',
  toolbarExportCSV: 'ייצוא ל- CSV',
  toolbarExportPrint: 'הדפסה',
  toolbarExportExcel: 'ייצוא ל- Excel',

  // Columns panel text
  columnsPanelTextFieldLabel: 'חפש עמודה',
  columnsPanelTextFieldPlaceholder: 'כותרת עמודה',
  columnsPanelDragIconLabel: 'סדר עמודות מחדש',
  columnsPanelShowAllButton: 'הצג הכל',
  columnsPanelHideAllButton: 'הסתר הכל',

  // Filter panel text
  filterPanelAddFilter: 'הוסף מסנן',
  filterPanelDeleteIconLabel: 'מחק',
  filterPanelLinkOperator: 'אופרטור לוגי',
  filterPanelOperators: 'אופרטור',

  // TODO v6: rename to filterPanelOperator
  filterPanelOperatorAnd: 'וגם',
  filterPanelOperatorOr: 'או',
  filterPanelColumns: 'עמודות',
  filterPanelInputLabel: 'ערך',
  filterPanelInputPlaceholder: 'ערך מסנן',

  // Filter operators text
  filterOperatorContains: 'מכיל',
  filterOperatorEquals: 'שווה',
  filterOperatorStartsWith: 'מתחיל ב-',
  filterOperatorEndsWith: 'נגמר ב-',
  filterOperatorIs: 'הינו',
  filterOperatorNot: 'אינו',
  filterOperatorAfter: 'אחרי',
  filterOperatorOnOrAfter: 'ב- או אחרי',
  filterOperatorBefore: 'לפני',
  filterOperatorOnOrBefore: 'ב- או לפני',
  filterOperatorIsEmpty: 'ריק',
  filterOperatorIsNotEmpty: 'אינו ריק',
  filterOperatorIsAnyOf: 'הוא אחד מ-',

  // Filter values text
  filterValueAny: 'כל ערך',
  filterValueTrue: 'כן',
  filterValueFalse: 'לא',

  // Column menu text
  columnMenuLabel: 'תפריט',
  columnMenuShowColumns: 'הצג עמודות',
  columnMenuFilter: 'סנן',
  columnMenuHideColumn: 'הסתר',
  columnMenuUnsort: 'בטל מיון',
  columnMenuSortAsc: 'מיין בסדר עולה',
  columnMenuSortDesc: 'מיין בסדר יורד',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} מסננים פעילים` : `מסנן אחד פעיל`,
  columnHeaderFiltersLabel: 'הצג מסננים',
  columnHeaderSortIconLabel: 'מיין',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1 ? `${count.toLocaleString()} שורות נבחרו` : `שורה אחת נבחרה`,

  // Total row amount footer text
  footerTotalRows: 'סך הכל:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} מתוך ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'בחירה',
  checkboxSelectionSelectAllRows: 'בחר הכל',
  checkboxSelectionUnselectAllRows: 'בטל הכל',
  checkboxSelectionSelectRow: 'בחר שורה',
  checkboxSelectionUnselectRow: 'בטל בחירת שורה',

  // Boolean cell text
  booleanCellTrueLabel: 'כן',
  booleanCellFalseLabel: 'לא',

  // Actions cell more text
  actionsCellMore: 'עוד',

  // Column pinning text
  pinToLeft: 'נעץ משמאל',
  pinToRight: 'נעץ מימין',
  unpin: 'בטל נעיצה',

  // Tree Data
  treeDataGroupingHeaderName: 'קבוצה',
  treeDataExpand: 'הרחב',
  treeDataCollapse: 'כווץ',

  // Grouping columns
  groupingColumnHeaderName: 'קבוצה',
  groupColumn: (name) => `קבץ לפי ${name}`,
  unGroupColumn: (name) => `הפסק לקבץ לפי ${name}`,

  // Master/detail
  expandDetailPanel: 'הרחב',
  collapseDetailPanel: 'כווץ',

  // Row reordering text
  rowReorderingHeaderName: 'סידור שורות',
};

export const heIL: Localization = getGridLocalization(heILGrid, heILCore);
