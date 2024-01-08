using api_nasa.Models;
using Microsoft.EntityFrameworkCore;

namespace api_nasa.Context
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        { }

        public DbSet<Destinos> Destinos { get; set; }
        public DbSet<Promocoes> Promocoes { get; set; }
        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Reservas> Reservas { get; set; }

    }
}
