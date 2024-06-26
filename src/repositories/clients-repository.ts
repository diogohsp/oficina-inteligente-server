import { Client, Prisma } from '@prisma/client'

export interface ClientsRepository {
  create: (data: Prisma.ClientCreateInput) => Promise<Client>
  update: (id: number, data: Prisma.ClientUpdateInput) => Promise<Client>
  findByCpf: (cpf: string) => Promise<Client | null>
  findById: (id: number) => Promise<Client | null>
  delete: (id: number) => Promise<Client | null>
}
