using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api_nasa.Models
{
    [Table("Reservas")]
    public class Reservas
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public double Valor { get; set; }
        [Required]
        public DateTime DataIda { get; set; }
        [Required]
        public DateTime DataVolta { get; set; }

        public int ClienteId {  get; set; }
        public Clientes Cliente { get; set; }
        public int DestinoId { get; set; }
        public Destinos Destino { get; set; }
        public int PromocaoId { get; set; }
        public Promocoes Promocao { get; set; }
    }
}
