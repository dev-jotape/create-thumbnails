import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("images")
export class Images {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  thumbnailSmall: string;

  @Column()
  thumbnailLarge: string;
}
