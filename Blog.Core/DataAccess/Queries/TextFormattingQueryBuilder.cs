using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;

using Domain.Enums;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class TextFormattingQueryBuilder
    {
        private IQueryable<TextFormatting> _queryable;

        public static TextFormattingQueryBuilder From(BlogContext _context)
        {
            var queryable = _context.TextFormatting.AsQueryable().AsNoTracking();

            return new TextFormattingQueryBuilder(queryable);
        }

        private TextFormattingQueryBuilder(IQueryable<TextFormatting> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<TextFormatting> Build()
        {
            return _queryable;
        }

        public TextFormattingQueryBuilder ByTextType(TextType? textType)
        {
            if (textType != null)
                _queryable = _queryable.Where(x => textType == x.TextType);

            return this;
        }
    }
}
