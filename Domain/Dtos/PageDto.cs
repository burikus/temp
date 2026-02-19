using System.ComponentModel.DataAnnotations;

namespace Domain.Dtos
{
    public record PageDto
    {
        [Range(0, int.MaxValue)]
        public int PageNumber { get; init; } = 0;

        [Range(1, int.MaxValue)]
        public int PageSize { get; init; } = 100;
    }
}
