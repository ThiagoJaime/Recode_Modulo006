using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api_nasa.Models
{
    [Table("Destinos")]
    public class Destinos
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Pais { get; set; }
        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public double Preco { get; set; }
        [Required]
        public int Duracao { get; set; }

        [JsonIgnore]
        public List<Reservas>? Reserva { get; set; }

    }
}
