import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigService } from './env-config.service'

@Module({
  imports: [ConfigModule],
  providers: [EnvConfigService],
})
export class EnvConfigModule {}
